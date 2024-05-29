import React from 'react'
import { useState } from 'react'

const Search = () => {
    const [search, setSearch] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
  return (
    <div>

        <input type="text" value={search} onChange={handleChange} />
        <button>Search</button>
    </div>
  )
}

export default Search