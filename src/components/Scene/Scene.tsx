import React, { useCallback, useState, useEffect, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import cx from 'classnames';
import styles from './Scene.module.scss';
import scene1 from './images/scene-01.png';
import scene2 from './images/scene-02.png';
import scene3 from './images/scene-03.png';
import scene4 from './images/scene-04.png';
import scene5 from './images/scene-05.png';
import scene6 from './images/scene-06.png';
import scene7 from './images/scene-07.png';
import Realistic from '../Realistic';

const images = [
  scene1,
  scene2,
  scene3,
  scene4,
  scene5,
  scene6,
  scene7,
];

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0
}

interface ISceneProps {
}

function Scene(props: ISceneProps) {
  const [current, setCurrent] = useState(0);

  const [aaa, setAaa] = useState(0);

  useEffect(() => {
    const next = (current + 1) % images.length;
    setTimeout(() => {
      setCurrent(next);
      if (next === images.length - 1) {
        setAaa(aaa => aaa +1);
      }
    }, next === 0 ? 2000 : 350);
  }, [current]);

  const instance = useRef();

  const getInstance = useCallback((instance: any) => {
    instance.current = instance;
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.scenes}>
        {images.map((e, i) => {
          return (
            <div key={i} className={cx(styles.scene, i === current && styles.current)}>
              <img src={e} />
            </div>
          )
        })}
      </div>
      {aaa > 0 && <Realistic key={aaa}/>}
     
    </div>
  );
}

export default Scene;
