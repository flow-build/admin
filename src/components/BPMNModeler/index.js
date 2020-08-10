/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from 'react';

import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import BpmnJS from 'bpmn-js/lib/Modeler';

export const modeler = new BpmnJS();

export const getXML = () => modeler.saveXML({ format: true });

const BPMNModeler = ({ url, diagramXML }) => {
  const ref = useRef(null);
  useEffect(() => {
    const loadBPMN = async () => {
      modeler.attachTo(ref.current);

      modeler.on('import.done', (event) => {
        modeler.get('canvas').zoom('fit-viewport');
      });

      if (url) {
        fetch(url)
          .then((res) => res.text())
          .then((diagram) => modeler.importXML(diagram))
          .catch((err) => console.log(err));
      } else if (diagramXML) {
        modeler.importXML(diagramXML)
          .then(() => console.log('diagram loaded!'))
          .catch((err) => console.log(`Loading error: ${err}`));
      }
    };
    loadBPMN();
  }, [ref, url]);


  return (
    <div className="react-bpmn-modeler--diagram" ref={ref} />
  );
};

export default BPMNModeler;
