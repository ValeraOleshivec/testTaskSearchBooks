import React from 'react';
import styles from './Header.module.scss'
import {Typography} from "components/ui/Typography";
import {TypographyType} from "components/ui/Typography/Typography";

export const Header = () => {
    return (
        <div className={styles.Header}>
            <Typography text={'Best search books ui'} type={TypographyType.TITLE}/>
        </div>
    );
};
