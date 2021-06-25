import React,{useState} from 'react'
import Input from './Input'
import Button from './Button'
import Card from './Card'
import axios from 'axios'
import classes from '../../css/SearchBar.module.css'

const SearchBar = () => {
    const [searchInput,setSearchInput]=useState('')
    const [images,setImages]=useState([])
    const [error,setError]=useState('')

    const handleInputChange=(event)=>{
        setSearchInput(event.target.value)
    }

    const handleSearch=()=>{

        axios.get("https://api.unsplash.com/search/photos",{
            params:{query:searchInput},
            headers:{
                Authorization:'Client-ID Fx3dFv-_0ZYSDjJsgXSqOMZI6kLxk_1A74ZWeBtWD4A'
            }
        }).then(res=>{
            setImages(res.data.results)
        }).catch((err)=>{
            setError(err)
        })
    }

    return (
        <div className={classes.main__container}>
            <div className={classes.search__container}>
                {error!=='' ? <p className={classes.err}>{error}</p> : null}
                <Input 
                placeholder="Enter photos to be searched"
                onChange={e=>(handleInputChange(e))}
                value={searchInput}/>

                <Button onClick={handleSearch}>Search</Button>
            </div>
            <div className={classes.card__container}>
                {images.map((ele)=>(
                    <Card 
                    key={ele.id}
                    src={ele.urls.regular}
                    title={searchInput}
                    description={ele.alt_description}
                    download={ele.links.download}
                    />
                ))}
            </div>
        </div>
    )
}

export default SearchBar

