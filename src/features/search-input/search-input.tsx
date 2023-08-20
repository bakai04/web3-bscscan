import { Icon } from "../../shared/ui";
import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import style from "./search-input.module.scss";
import { useSearchParams } from "react-router-dom";

export const SearchInput = () => {
  const [value, setValue] = useState("0x5d96707c70447411F91313836f6526fFA3B1f9dd");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchParams({ ...searchParams, address: value });
    }
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, [])

  return (
    <div className={style.search}>
      <Icon.Search className={style.search__svg} onClick={() => setSearchParams({ ...searchParams, address: value })} />
      <input
        value={value}
        ref={inputRef}
        onChange={handleChange}
        className={style.search__input}
        onKeyDown={handleKeyPress}
        placeholder="Name or address" />
      {value.length > 0 && <Icon.Close className={style.search__cross} onClick={() => setValue("")} />}
    </div>
  )
}
