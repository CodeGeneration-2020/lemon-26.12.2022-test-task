import React, { useEffect, useState } from 'react';

import { IItemsCards, TStatusToDO } from '../../types';
import { DASHBOARD, ITEMS_CARDS, StatusToDO } from '../../../common/constants';
import Modal from './components/modal';
import { getItem, setNewItem } from '../../../common/services';

import { AddNewCard, Count, StyledColumnHeader, Title } from './index.styled';
import { Box } from '../../../common/components/index.styled';

import ThreeDots from '../../../../assets/images/threeDots.svg';
import Add from '../../../../assets/images/add.svg';
import AddBlue from '../../../../assets/images/addBlue.svg';
import DropWrapperList from './components/dropWrapper/components/dropWrapperList';

const DashBoard = () => {
  const newItems: IItemsCards[] = JSON.parse(getItem('items') ?? '[]');

  const [items, setItems] = useState<IItemsCards[]>(newItems ?? []);
  const [isOpen, setIsOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<TStatusToDO>(
    StatusToDO.TODO,
  );

  useEffect(() => {
    const itemsLocal = getItem('items');
    if (!itemsLocal || !JSON.parse(itemsLocal).length) {
      setNewItem('items', JSON.stringify(ITEMS_CARDS));
    }
  }, []);

  const onDrop = (item: IItemsCards, _: unknown, status: TStatusToDO) => {
    setItems((prevState) => {
      const newItems = prevState
        .filter((i) => i.id !== item.id)
        .concat({ ...item, status });
      setNewItem('items', JSON.stringify(newItems));
      return [...newItems];
    });
  };

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    const item = items[dragIndex];
    setItems((prevState) => {
      const newItems = prevState.filter((i, idx) => idx !== dragIndex);
      newItems.splice(hoverIndex, 0, item);
      return [...newItems];
    });
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <Box margin="24px">
      {DASHBOARD.map(({ src, color, title }) => {
        const todos = items.filter((item) => item.status === title);
        const showModal = () => {
          setCurrentStatus(title);
          setIsOpen(true);
        };
        return (
          <Box key={title} changeDirection={true} margin="0 36px 0 0">
            <StyledColumnHeader mb="24px" justify="space-between" color={color}>
              <Box>
                <Box margin="0 8px 0 0">
                  <img src={src} alt={src} />
                </Box>
                <Title>{title}</Title>
                <Count margin="0 0 0 12px" justify="center" align="center">
                  {todos.length}
                </Count>
              </Box>
              <Box>
                <Box margin="0 10px 0 0">
                  <img src={Add} alt="add" />
                </Box>
                <Box>
                  <img src={ThreeDots} alt="ThreeDots" />
                </Box>
              </Box>
            </StyledColumnHeader>

            <DropWrapperList
              isEmpty={!todos.length}
              onDrop={onDrop}
              title={title}
              items={items}
              moveItem={moveItem}
            />
            <AddNewCard onClick={showModal}>
              <Box align="center" justify="center">
                <Box margin="0 13px 0 0">
                  <img src={AddBlue} alt="AddBlue" />
                </Box>
                Add a Card
              </Box>
            </AddNewCard>
          </Box>
        );
      })}
      <Modal
        isOpen={isOpen}
        status={currentStatus}
        setItems={setItems}
        handleCancel={handleCancel}
      />
    </Box>
  );
};

export default DashBoard;
