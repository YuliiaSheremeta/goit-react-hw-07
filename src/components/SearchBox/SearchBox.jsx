import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { useId } from 'react';
import css from './SearchBox.module.css'


export default function SearchBox() {
    
    const dispatch = useDispatch();

    const selectNameFilter = useSelector((state) => state.filters.name);
   
    const filterId = useId();

    const handleFilterSearch = (event) => {
        const query = event.target.value.toLowerCase();
        dispatch(changeFilter(query));
}

    


    return (
        <div className={css.container}>
            <label className={css.label} htmlFor={filterId}> Search</label>
            <input className={css.input} type="text" value={selectNameFilter} id={filterId} onChange={handleFilterSearch}/>
        </div>
      
    )
}