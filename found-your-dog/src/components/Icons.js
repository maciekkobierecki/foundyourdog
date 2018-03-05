import React from 'react';
import PropTypes from 'prop-types';


export const ICONS ={
    LOCATION: 'M42.117,43.007c-0.55-0.067-1.046,0.327-1.11,0.876s0.328,1.046,0.876,1.11C52.399,46.231,58,49.567,58,51.5   c0,2.714-10.652,6.5-28,6.5S2,54.214,2,51.5c0-1.933,5.601-5.269,16.117-6.507c0.548-0.064,0.94-0.562,0.876-1.11   c-0.065-0.549-0.561-0.945-1.11-0.876C7.354,44.247,0,47.739,0,51.5C0,55.724,10.305,60,30,60s30-4.276,30-8.5   C60,47.739,52.646,44.247,42.117,43.007z M29.823,54.757L45.164,32.6c5.754-7.671,4.922-20.28-1.781-26.982C39.761,1.995,34.945,0,29.823,0   s-9.938,1.995-13.56,5.617c-6.703,6.702-7.535,19.311-1.804,26.952L29.823,54.757z M17.677,7.031C20.922,3.787,25.235,2,29.823,2   s8.901,1.787,12.146,5.031c6.05,6.049,6.795,17.437,1.573,24.399L29.823,51.243L16.082,31.4   C10.882,24.468,11.628,13.08,17.677,7.031z M30,26c3.86,0,7-3.141,7-7s-3.14-7-7-7s-7,3.141-7,7S26.14,26,30,26z M30,14c2.757,0,5,2.243,5,5s-2.243,5-5,5   s-5-2.243-5-5S27.243,14,30,14z',
};

export const Icon = props => {
    const styles = {
      svg: {
        display: 'inline-block',
        verticalAlign: 'middle',
        padding:10,
      },
      path: {
        fill: props.color,
      },
    };
  
    return (
      <svg
        style={styles.svg}
        width={`${props.size}px`}
        height={`${props.size}px`}
        viewBox="0 0 60 60"
      >
        <path
          style={styles.path}
          d={props.icon}
        ></path>
      </svg>
    );
  };
  
  Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
  };
  
  Icon.defaultProps = {
    size: 20,
  };
  
  export default Icon;