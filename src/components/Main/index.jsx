import { useCallback } from "react";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import ParticlesParams from '../../assets/particle.json';

import styles from './styles.module.scss';

export default function Main() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {

  }, []);
  return (
    <>
      <Particles
        className={styles.particles}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#fff",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles:{
            number:{
              value:50,
              density:{
                enable:false,
                value_area:400
              }
            },
            color: {
                value: ["#EA5532", "#F6AD3C", "#FFF33F", "#00A95F", "#00ADA9", "#00AFEC","#4D4398", "#E85298"]
            },
            shape:{
              type:"polygon",
              stroke:{
                width:0
              },
              polygon:{
                nb_sides:5
              }
            },
            opacity:{
              value:1,
              random:false,
              anim:{
                enable:true,
                speed:20,
                opacity_min:0,
                sync:false
              }
            },
            size:{
              value:5.305992965476349,
              random:true,
              anim:{
                enable:true,
                speed:1.345709068776642,
                size_min:0.8,
                sync:false
              }
            },
            line_linked:{
              enable:false
            },
            move:{
              enable:true,
              speed:8,
              direction:"bottom",
              random:false,
              straight:false,
              out_mode:"out",
              bounce:false,
              attract:{
                enable:false,
                rotateX:600,
                rotateY:1200
              }
            }
          },
          interactivityDetect:{
            detect_on:"canvas",
            events:{
              onhover:{
                enable:false
              },
              onclick:{
                enable:false
              },
              resize:true
            }
          },
          detectRetina: true,
        }}
      />
    </>
  );
}
