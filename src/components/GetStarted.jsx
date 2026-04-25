import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-35
    h-35 rounded-full bg-blue-gradient p-0.5
    cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col 
        bg-primary w-full h-full rounded-full`}>
          <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium
            text-[18px] leading-5.75 mr-2">
              <span className="text-gradient">Get</span>

            </p>

              <img src={arrowUp} alt="arrowUp" className="w-5.75 
              h-5.75 object-contain" />

          </div>

           <p className="font-poppins font-medium
            text-[18px] leading-5.75">
              <span className="text-gradient">Started</span>              
            </p>

      </div>
    </div>
  )
}

export default GetStarted


