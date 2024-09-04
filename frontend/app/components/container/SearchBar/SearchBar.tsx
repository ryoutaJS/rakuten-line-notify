import { FormEvent, useRef } from 'react'
import { TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

interface Props {
  onSearch: (searchText: string) => void
}

export const SearchBar = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (inputRef.current?.value) {
      props.onSearch(inputRef.current.value)
    }
    inputRef.current?.blur()
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="ほしいものリストに追加"
        placeholder="商品名を入力（例：スマホ）"
        fullWidth
        autoFocus
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        inputRef={inputRef}
      />
    </form>
  )
}
