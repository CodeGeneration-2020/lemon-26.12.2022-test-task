import { useDrop } from 'react-dnd';
import { IHandleDrop } from '../types';

export const handleDrop = ({ index, moveItem, ref }: IHandleDrop) => {
  const [, drop] = useDrop({
    accept: 'ITEM',
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoveredRect = ref?.current?.getBoundingClientRect();
      const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
      const mousePosition = monitor.getClientOffset();
      const hoverClientY = mousePosition!.y - hoveredRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItem(dragIndex, hoverIndex);
      index = hoverIndex;
    },
  });

  return drop;
};
