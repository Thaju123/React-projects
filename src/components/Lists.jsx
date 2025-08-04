  import styles from "./Net.module.css"
  import styled from"styled-components"
  export const Lists = ({cur}) => {
    const { id, name, rating, description, genre, cast, img, watch_url } =cur;
  // const btn_style={ 
  //   backgroundColor:`${rating>=8.5?"#7dcea0":"#f7dc6f"}`,
  //   padding:"0.4rem 1rem" ,
  //   border:"none",
  //   color:"black"}
  const ThajuBtn=styled.button({
    backgroundColor:`${rating>=8.5?"#7dcea0":"#f7dc6f"}`,
    padding:"0.4rem 1rem" ,
    border:"none",
    borderRadius:"10px"
  });
  const ratingclass=rating>=8.5?styles.super_hit:styles.average;

    return (
<li key={id} className={styles.card}>
  <div className={styles.img}>
    <img src={img} alt={name} />
  </div>
  <div className={styles.card_content}>
    <h2>Name: {name}</h2>
    <h3>Rating: <span className={`${styles.rating} ${ratingclass}`}>{rating}</span></h3>
    <p>Summary: {description}</p>
    <p>Genre: {genre}</p>
    <p>Cast: {cast}</p>
    <a href={watch_url}>
      {/* <button style={btn_style}>Watch Now</button> */}
      <ThajuBtn>Watch now</ThajuBtn>
    </a>
  </div>
</li>

    );
  };
