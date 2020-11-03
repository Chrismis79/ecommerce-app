import React from 'react';
import { connect } from 'react-redux';

import { selectDirectorySelections } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({ sections }) => {

    return (
        <DirectoryMenuContainer>
            {sections.map(({ id, ...sectionProps }) => (
                <MenuItem key={id}  {...sectionProps} />
            ))}
        </DirectoryMenuContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySelections
});

export default connect(mapStateToProps)(Directory);