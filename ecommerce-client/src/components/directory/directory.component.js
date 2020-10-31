import React from 'react';
import { connect } from 'react-redux';

import { selectDirectorySelections } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = ({ sections }) => {

    return (
        <div className='directory-menu'>
            {sections.map(({ id, ...sectionProps }) => (
                <MenuItem key={id}  {...sectionProps} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySelections
});

export default connect(mapStateToProps)(Directory);