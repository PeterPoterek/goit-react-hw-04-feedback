import PropTypes from 'prop-types';

import {
  SectionContainer,
  SectionWrapper,
  SectionTitle,
} from './SectionStyles';

const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <SectionWrapper>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </SectionWrapper>
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
