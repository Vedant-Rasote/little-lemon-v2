import { Gowun_Batang } from 'next/font/google';
const gowunBatang = Gowun_Batang({ subsets: ['latin'], weight: '400' });

const Section = (props) => {
  return (
    <div className="container">
        <div className="md:p-10">
            <h2 className={`${gowunBatang.className} uppercase text-lg md:text-xl lg:text-2xl`}>{props.title}</h2>
            {props.children}
        </div>
    </div>
  )
}

export default Section

