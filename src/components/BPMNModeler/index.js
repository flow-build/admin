import React, { useRef, useEffect } from 'react';

import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import BpmnJS from 'bpmn-js/lib/Modeler';
import PropTypes from 'prop-types';

export const modeler = new BpmnJS();

export const getXML = () => modeler.saveXML({ format: true });

const BPMNModeler = ({ url, diagramXML }) => {
  const ref = useRef(null);
  const loadBPMN = async () => {
    modeler.attachTo(ref.current);

    modeler.on('import.done', () => {
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
  useEffect(() => {
    loadBPMN();
  }, [ref, url]);


  return (
    <div className="react-bpmn-modeler--diagram" ref={ref} />
  );
};

BPMNModeler.propTypes = {
  url: PropTypes.string,
  diagramXML: PropTypes.string,
};

BPMNModeler.defaultProps = {
  url: '',
  diagramXML: '',
};

export default BPMNModeler;
