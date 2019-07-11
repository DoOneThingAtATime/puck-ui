import React, { Fragment, ReactElement, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import { Icon } from '../index';
import { scopedClassMaker } from '../helper/classes';
import Button from '../button/button';

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
}

const scopedClass = scopedClassMaker('puck-dialog');
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = props => {
  const onClickClose: React.MouseEventHandler = e => {
    props.onClose(e);
  };

  const onClickMask: React.MouseEventHandler = e => {
    if (props.closeOnClickMask) {
      props.onClose(e);
    }
  };

  const result = props.visible ? (
    <Fragment>
      <div className={sc('mask')} onClick={onClickMask} />
      <div className={sc('')}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name="close" />
        </div>
        <header className={sc('header')}>提示</header>
        <main className={sc('main')}>{props.children}</main>
        {props.buttons && props.buttons.length > 0 && (
          <footer className={sc('footer')}>
            {props.buttons.map((button, index) =>
              React.cloneElement(button, { key: index })
            )}
          </footer>
        )}
      </div>
    </Fragment>
  ) : null;

  return ReactDOM.createPortal(result, document.body);
};

Dialog.defaultProps = {
  closeOnClickMask: false
};

const modal = (
  content: any,
  buttons?: Array<ReactElement>,
  afterClose?: () => void
) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };

  const component = (
    <Dialog
      visible={true}
      onClose={() => {
        close();
        afterClose && afterClose();
      }}
      buttons={buttons}
    >
      {content}
    </Dialog>
  );

  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);

  return close;
};

const alert = (content: string) => {
  const buttons = [
    <Button
      onClick={() => {
        onClose();
      }}
    >
      知道啦
    </Button>
  ];
  const onClose = modal(content, buttons);
};

const confirm = (content: ReactNode, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    onClose();
    yes && yes();
  };
  const onNo = () => {
    onClose();
    no && no();
  };

  const buttons = [
    <Button onClick={onYes}>yes</Button>,
    <Button onClick={onNo}>no</Button>
  ];
  const onClose = modal(content, buttons, no);
};

export { alert, confirm, modal };

export default Dialog;
