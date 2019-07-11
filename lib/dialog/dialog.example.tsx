import React, { useState } from 'react';
import Dialog, { alert, confirm, modal } from './dialog';
import Button from '../button/button';

export default function() {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);

  const openModal = () => {
    const close = modal(
      <h1>
        我是一段HTML，啦啦啦啦啦 <Button onClick={() => close()}>关闭</Button>
      </h1>
    );
  };

  return (
    <div>
      <div
        style={{ position: 'relative', zIndex: 10 }}
      >
        <h1>example 1</h1>
        <Button onClick={() => setX(!x)}>click</Button>
        <Dialog
          visible={x}
          buttons={[
            <Button
              onClick={() => {
                setX(false);
              }}
            >
              关闭
            </Button>,
            <Button
              onClick={() => {
                setX(false);
              }}
            >
              知道啦！
            </Button>
          ]}
          onClose={() => {
            setX(false);
          }}
        >
          <p>我是一段HTML，啦啦啦啦啦</p>
        </Dialog>
      </div>

      <div style={{ position: 'relative', zIndex: 9 }}>
        <h1>example 2</h1>
        <Button onClick={() => setY(!y)}>click</Button>
        <Dialog
          visible={y}
          buttons={[
            <Button
              onClick={() => {
                setY(false);
              }}
            >
              关闭
            </Button>,
            <Button
              onClick={() => {
                setY(false);
              }}
            >
              知道啦！
            </Button>
          ]}
          onClose={() => {
            setY(false);
          }}
          closeOnClickMask={true}
        >
          <p>我是一段HTML，啦啦啦啦啦</p>
        </Dialog>
      </div>

      <div style={{ position: 'relative', zIndex: 9 }}>
        <h1>example 3</h1>
        <Button onClick={() => alert('操作成功！')}>alert成功提示</Button>
        <Button
          onClick={() =>
            confirm(
              `您确定要停用所选的成员吗？
                      成员停用后，可以在停用成员列表中重新启用。`,
              () => {
                console.log('你点击了 yes');
              },
              () => {
                console.log('你点击了 no');
              }
            )
          }
        >
          confirm确认
        </Button>
      </div>

      <div style={{ position: 'relative', zIndex: 9 }}>
        <h1>example 4</h1>
        <Button onClick={openModal}>modal 渲染 html</Button>
      </div>
    </div>
  );
}
