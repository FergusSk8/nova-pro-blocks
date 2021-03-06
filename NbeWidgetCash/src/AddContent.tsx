import React, {useEffect, useState} from 'react';
import {useIntl} from 'umi';
import {Button, Card} from 'antd';
import styles from './index.css';
import DropDown from './components/DropDown/DropDown';
import Grafics from './components/Grafics/Grafics';
import {getBalanceFormat} from './helpers/getBalanceFormat';

const AddContent: React.FC<any> = ({setDropNew, data, currency}) => {
  const intl = useIntl();
  const [drop, setDrop] = useState();
  useEffect(() => {
    setDropNew(drop);
  }, [drop]);

  const balance = getBalanceFormat(data);

  return (
    <Card>
      <div className={styles.header}>
        <div className={styles.title}>
          {intl.formatMessage({
            id: 'cash.title',
          })} {currency}
        </div>
        <div>
          <DropDown setDrop={setDrop}/>
        </div>
      </div>
      <div>
        <p className={styles.description}>{`${balance}`}</p>
      </div>
      <div>
        <Grafics item={data} drop={drop}/>
      </div>
      <div>
        <Button type="text" className={styles.view} href="/account/users">
          {intl.formatMessage({
            id: 'cash.viewAccounts',
          })}
        </Button>
      </div>
    </Card>
  );
};
export default AddContent;
