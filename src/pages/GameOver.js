import React, { useEffect } from 'react';
import Title from '../features/title';
import ModalBtn from '../button/ModalBtn';
import LinkBtn from '../button/LinkBtn';
import ScoresModal from '../features/modal/ScoresModal';
import chinaMP3 from '../imgs/china.mp3';
import fakeMP3 from '../features/modal/fake.mp3';
import TitleImg from '../features/titleImg';
import PageContainer from '../features/pageContainer/PageContainer';

const GameOver = () => {

    const playFakeMP3 = () => {
        const fake = new Audio(fakeMP3);
        fake.play();
    };

    useEffect(() => {
        const china = new Audio(chinaMP3);
        china.play();
    }, []);

    return (
        <PageContainer>
            <TitleImg />
            <Title 
                text={`"It's all Fake News..."`} 
                subText={`"Nobody wins but me!"`} 
            />
            <div className='mt-5'>
                <LinkBtn
                    className='btn btn-link'
                    text='TITLE SCREEN'
                    to='/'
                />
                <ModalBtn
                    className='btn btn-link'
                    text='HIGH SCORES'
                    onClick={playFakeMP3}
                    dataToggle="modal" 
                    dataTarget="#scoresModal"
                />
            </div>
            <ScoresModal />
        </PageContainer>
    );
};

export default GameOver;
