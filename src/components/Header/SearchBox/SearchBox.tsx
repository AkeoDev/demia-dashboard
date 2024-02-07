import { ChangeEvent, ChangeEventHandler, FunctionComponent, useRef, useState } from "react";
import classes from './SearchBox.module.scss';
import { ReactSVG } from "react-svg";
import { searchIcon } from "../../../assets";
import _ from 'lodash';

export const SearchBox:FunctionComponent<{onChange: ChangeEventHandler<HTMLInputElement>}> = ({onChange}) => {
    
    const [isActive, setIsActive] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const setActive = () => {
        setIsActive(true)
    }

    const setNotActive = () => {
        setIsActive(false);
    }

    const toggleActive = () => {
        !isActive ? 
            inputRef.current?.focus() :
            inputRef.current?.blur()
    }

    const thisOnChange = _.debounce((event: ChangeEvent<HTMLInputElement>) => {
        onChange(event)
    }, 500)
    
    return (
        <div className={classes['search-container'] + ` ${isActive ? classes['active'] : ""}`}>
            <ReactSVG wrapper={"span"} src={searchIcon} onClick={toggleActive}></ReactSVG>
            <input ref={inputRef} placeholder="Search" type="text" onChange={thisOnChange} onFocus={setActive} onBlur={setNotActive}/>
        </div>
    )
}