import { Level } from "../../helpers/imc"
import styles from './GrideItem.module.css'
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'
import { title } from "process"

type Props = {
    item: Level
}

export const GrideItem = ({ item }: Props) => {
    return(
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage} alt="" width={30}/>    
            </div>
            <div className={styles.gridTitle}>{item.title}</div>

            {item.yourImc &&
                <div className={styles.yourImc}>O seu IMC é {item.yourImc} kg/m²</div>
            }

            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}