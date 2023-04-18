import react from 'react';

const SingleComment = (props)=>{
    return(
        <div className='comment'>
            <a className='avatar'>
            <img src={props.pic} alt='profile image'/>
            </a>
            <div className='content'>
            <a className='author'>{props.name}</a>
            <div className='metadata'>
                <span className='date'>{props.time}</span>
            </div>
            <div className='text'>
                {props.text}
            </div>
            </div>
        </div>
    )
}

export default SingleComment;