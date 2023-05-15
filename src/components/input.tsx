import  { useState, useRef, useEffect } from 'react';
import useOutsideClick from '../lib/useOutsideClick';

const Form = () => {
	const [isReady, setIsReady] = useState(true);
	const [isType, setIsType] = useState(false);
	const [search, setSearch] = useState('');

	const inputRef = useRef(null);
	useOutsideClick(inputRef,()=>{
		setIsType(false)
	})
	const handleChange = (e) => setSearch(e.target.value);

	useEffect(() => {
    if (isReady) {
      inputRef.current.focus();
    }
  }, [isReady]);

	useEffect(() => {
    if (!search) {
			setIsType(false);
		}
  }, [search]);

	const handleKeyDown = ()=> {
		if (search) {
			setIsType(true);
		}
	}

	return (
		<form className="px-4 py-3">	
			<input className={isType? "relative w-full h-16 p-1 text-4xl border-4 border-black focus: outline-none caret-w-2":"relative w-1/2 h-16 p-1 text-4xl border-4 border-black focus: outline-none caret-w-2"} ref={inputRef}
        type="text" defaultValue={''} onChange={handleChange} onKeyDown={handleKeyDown}></input>
			{isType? <div className= 'absolute top-4 right-6'>
			<div className= 'p-1 w-16 text-3xl min-w-max h-14 border-4 border-fuchsia-400'>more results</div>
			</div>: null}
		</form>
	);
};

export default Form;
