import { Level } from "../../helpers/imc";
import styles from "./GridItem.module.css";
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
    item: Level
};



export const GridItem = ({ item }: Props) => {
    return (
        <div className={styles.main} style={{ background: item.color}}>
            <div className={styles.gridIcon}>
                {/* {item.icon === 'up' && <img src={upImage} alt="" width="30"/>}
                {item.icon === 'down' && <img src={downImage} alt="" width="30"/>} */}
                <img src={item.icon === 'up' ? upImage : downImage } alt="" width='30'/>

            </div>
            <div className={styles.gridTitle}>{item.title}</div>
            
            {item.yourImc &&
                <div className={styles.yourImc}>Seu IMC e de {item.yourImc} kg/m2</div>
            }

            <div className={styles.gridInfo}>
                <>
                    IMC esta entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}