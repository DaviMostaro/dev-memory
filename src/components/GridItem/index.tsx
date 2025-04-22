import { GridItemType } from '@/types/GridItemType';
import * as C from './styles';
import b7Svg from '../../svgs/b7.svg';
import { items } from '../../data/items';

type Props = {
    item: GridItemType;
    onClick: () => void
}
export const GridItem = ({item, onClick}: Props) => {
    return (
        <C.Container 
            onClick={onClick}
            showbackground={item.permanentShown === true || item.shown === true}
        >
            {item.permanentShown === false && item.shown === false && 
                <C.Icon src={b7Svg.src} alt='' opacity={0.1}/>
            }
            {(item.permanentShown === true || item.shown === true) && item.item !== null &&
                <C.Icon  src={items[item.item].icon} alt=''/>
            }
        </C.Container>
    );
}