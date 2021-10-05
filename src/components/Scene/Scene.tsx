import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import styles from './Scene.module.scss';
import scene1 from './images/scene-01.png';
import scene2 from './images/scene-02.png';
import scene3 from './images/scene-03.png';
import scene4 from './images/scene-04.png';
import scene5 from './images/scene-05.png';
import scene6 from './images/scene-06.png';
import scene7 from './images/scene-07.png';

const images = [
  scene1,
  scene2,
  scene3,
  scene4,
  scene5,
  scene6,
  scene7,
];

interface ISceneProps {
}

function Scene(props: ISceneProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrent((current + 1) % images.length);
    }, 2000);
  }, [current]);

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
    </div>
  );
}

export default Scene;
