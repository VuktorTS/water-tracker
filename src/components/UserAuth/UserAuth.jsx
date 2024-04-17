import css from './UserAuth.module.css';
import { Link } from "react-router-dom"

export const UserAuth = () => {
  
  return (
    <div className={css.allDivLink}>
      <Link to="/signin" style={{minHeight: '100%'}}>
      <button type="button" className={css.buttonLink}>Sign In <svg className={css.svgSpan}/></button>
      </Link>
    </div>
  )
}
