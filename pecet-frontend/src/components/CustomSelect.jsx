import { useState, useRef, useEffect } from 'react'
import styles from '../styles/CustomSelect.module.css'

export default function CustomSelect({ label, options, value, onChange, name }) {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (option) => {
    onChange({ target: { name, value: option.value } })
    setOpen(false)
  }

  const selected = options.find(o => o.value === value)

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.selectBox} onClick={() => setOpen(!open)}>
        <span>{selected ? selected.label : 'Selecciona una opción'}</span>
        <span className={styles.arrow}>{open ? '▲' : '▼'}</span>
      </div>
      {open && (
        <ul className={styles.options}>
          {options.map(option => (
            <li
              key={option.value}
              className={styles.option}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
