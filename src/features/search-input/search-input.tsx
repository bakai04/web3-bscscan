import { Icon } from "../../shared/ui";
import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import style from "./search-input.module.scss";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export const SearchInput = () => {
  const { id } = useParams()
  const [value, setValue] = useState(id);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  useEffect(()=>{
    setValue(id);
  }, [])

  const handleNavigate = () => {
    if (value && value?.length > 0) {
      navigate(value || "")
    }
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleNavigate();
    }
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, [])

  return (
    <div className={style.search}>
      <Icon.Search className={style.search__svg} onClick={handleNavigate} />
      <input
        value={value}
        ref={inputRef}
        onChange={handleChange}
        className={style.search__input}
        onKeyDown={handleKeyPress}
        placeholder="Введите address контракта" />
      {value && value?.length > 0 && <Icon.Close className={style.search__cross} onClick={() => setValue("")} />}
    </div>
  )
}
