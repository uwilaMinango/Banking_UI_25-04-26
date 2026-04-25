import { stats } from '../constants';
import styles from '../style';

const Stats = () => {
  return (
    <section className={`${styles.flexCenter}
    flex-row flex-wrap sm:mb-20 mb-6`}>
        {stats.map((stat)=>(
          <div key={stat.id} className={`flex-1 flex justify-start
          items-center flex-row m-3`}>
              <h4 className="font-poppins 
              font-semibold xs:text-[40px] 
              text-[30px] xs:leading-13.25 leading-10.75 
              text-white">{stat.value}</h4>

              <p className="font-poppins 
              font-normal xs:text-[20px] 
              text-[15px] xs:leading-6.5 leading-5.25 
              text-gradient uppercase ml-3">{stat.title}</p>
          </div>
        )
        )}
    </section>
  )
}

export default Stats


