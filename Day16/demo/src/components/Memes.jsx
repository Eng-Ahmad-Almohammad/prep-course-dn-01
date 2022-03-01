
const Memes = (props) =>{
    return(
        <>
        {
            props.memes.map(meme => {
                return(
                    <div>
                        <img src={meme.image} alt="" />
                        <h3>{meme.name}</h3>
                        <p>{meme.bottomText}</p>
                        <p>{meme.rank}</p>
                    </div>
                )
                
            })
        }
        </>
        
        
    )
};

export default Memes;