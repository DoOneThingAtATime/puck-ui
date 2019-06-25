import React, { useState } from 'react';
import Dialog, { alert, confirm, modal } from './dialog';

export default function() {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);

  const openModal = () => {
    const close = modal(
      <h1>
        我是一段HTML，啦啦啦啦啦 <button onClick={() => close()}>关闭</button>
      </h1>
    );
  };

  return (
    <div>
      <div
        style={{ position: 'relative', zIndex: 10, border: '1px solid red' }}
      >
        <h1>example 1</h1>
        <button onClick={() => setX(!x)}>click</button>
        <Dialog
          visible={x}
          buttons={[
            <button
              onClick={() => {
                setX(false);
              }}
            >
              关闭
            </button>,
            <button
              onClick={() => {
                setX(false);
              }}
            >
              知道啦！
            </button>
          ]}
          onClose={() => {
            setX(false);
          }}
        >
          <p>我是一段HTML，啦啦啦啦啦</p>
        </Dialog>
      </div>

      <div style={{ position: 'relative', zIndex: 9, border: '1px solid red' }}>
        <h1>example 2</h1>
        <button onClick={() => setY(!y)}>click</button>
        <Dialog
          visible={y}
          buttons={[
            <button
              onClick={() => {
                setY(false);
              }}
            >
              关闭
            </button>,
            <button
              onClick={() => {
                setY(false);
              }}
            >
              知道啦！
            </button>
          ]}
          onClose={() => {
            setY(false);
          }}
          closeOnClickMask={true}
        >
          <p>我是一段HTML，啦啦啦啦啦</p>
        </Dialog>
      </div>

      <div style={{ position: 'relative', zIndex: 9, border: '1px solid red' }}>
        <h1>example 3</h1>
        <button onClick={() => alert('操作成功！')}>alert成功提示</button>
        <button
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
        </button>
      </div>

      <div style={{ position: 'relative', zIndex: 9, border: '1px solid red' }}>
        <h1>example 4</h1>
        <button onClick={openModal}>modal 渲染 html</button>
      </div>
    </div>
  );
}
