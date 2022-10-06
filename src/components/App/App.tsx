import React, { useState } from 'react';
import useScreenSize from '../../hooks/useScreenSize';
import useWindowSize from '../../hooks/useWindowSize';
import styled, { createGlobalStyle } from 'styled-components';
import useElementSize from '../../hooks/useElementSize';

const Wrapper = styled.main`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Grid = styled.div<{
  gap: number;
  rows: number;
  columns: number;
}>`
  position: absolute;
  background-color: yellow;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  gap: ${(props) => props.gap}px;
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
`;

const Col = styled.div`
  background-color: pink;
  height: calc(100% - 16px);
  min-width: 24px;
  padding: 8px;
  text-align: center;
`;

const ColWithSize = (props: any) => {
  const { ref, width, height } = useElementSize();
  return (
    <div {...props} ref={ref}>
      {width} * {height}
    </div>
  );
};

const GlobalStyles = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

const ScreenSettings = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 8px;
  background: white;
`;

export default function App() {
  const scr = useScreenSize();
  const wnd = useWindowSize();

  const [gap, setGap] = useState(8);
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(12);

  return (
    <Wrapper>
      <GlobalStyles />
      <Grid gap={gap} rows={rows} columns={columns}>
        {Array(columns * rows)
          .fill(null)
          .map((_, i) => (
            <Col as={ColWithSize} key={i} />
          ))}
      </Grid>
      <ScreenSettings>
        <h2>
          Screen: {scr.width}px * {scr.height}px
        </h2>
        <h3>
          Window: {wnd.width}px * {wnd.height}px
        </h3>
        <div>
          <label>
            Gap
            <input
              min={1}
              type={'number'}
              value={gap}
              onChange={(e) => setGap(parseInt(e.target.value, 10))}
            />
          </label>
        </div>
        <div>
          <label>
            Rows
            <input
              min={1}
              type={'number'}
              value={rows}
              onChange={(e) => setRows(parseInt(e.target.value, 10))}
            />
          </label>
        </div>
        <div>
          <label>
            Columns
            <input
              min={1}
              type={'number'}
              value={columns}
              onChange={(e) => setColumns(parseInt(e.target.value, 10))}
            />
          </label>
        </div>
      </ScreenSettings>
    </Wrapper>
  );
}
