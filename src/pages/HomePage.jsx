import ModalWrapper from '../components/ModalWrapper/ModalWrapper.jsx';
import AddWaterModal from '../components/AddWaterModal/AddWaterModal.jsx';
import icons from 'img/icons.svg';
import React, { useState } from 'react';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <section className="HomePageSection">
        <div className="ContentWraper">
          <div className="DeliNorma">
            <h2 className="DeliTitle">My daily norma</h2>
            <div className="DeliWaterNorma">1.5 L</div>
            <button type="button" className="EditWaterBtn">
              Edit
            </button>
          </div>
          <img src="" className="BottleImg" alt="" />
          <div className="WaterRatioContainer">
            <div className="WaterRangeContainer">
              <h3 className="WaterRangeTitle">Today</h3>
              <input
                type="range"
                readOnly={true}
                style={{ marginRight: '2em' }}
                aria-label="Water range"
                value={0}
              />
              <div className="RateContainer">
                <span className="StartMark">0%</span>
                <span className="MainMark" style={{ marginRight: '2em' }}>
                  50%
                </span>
                <span className="EndMark">100%</span>
              </div>
            </div>
            <button type="button" onClick={onOpen}>
              <svg>
                <use href={`${icons}#icon-add-button`}></use>
              </svg>
              addWater
            </button>
          </div>
        </div>
        <div className="ContentWraper">
          <div className="TodauWaterList"></div>
          <div className="MonthStatusTable"></div>
        </div>
      </section>

      <div>
        Home page
        {isOpen && (
          <ModalWrapper onClose={onClose} title="Add water">
            <AddWaterModal></AddWaterModal>
          </ModalWrapper>
        )}
      </div>
    </>
  );
};

export default HomePage;
