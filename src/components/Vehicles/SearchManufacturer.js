
import React, {Fragment, useState} from 'react'
import { styled , css} from 'styled-components'
import { manufacturers } from '../Constants';
import { Combobox, Transition } from '@headlessui/react';


function SearchManufacturer({ active, manufacturer, setManufacturer }) {
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState('');
  
    const filteredManufacturers =
      query === ""
        ? manufacturers
        : manufacturers.filter((item) =>
            item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
          );
  
    return (
      <Container>
        <Combobox value={selected} onChange={setSelected}>
        <Content>
        <Wrap>
          <BoxCombo
            placeholder="Search Vehicles"
            displayValue={(manufacturer) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
            
        </Wrap>
          <TransitionBox
            as={Fragment}
            Leave="transition ease-in duration-100"
            LeaveFrom="opacity-100"
            LeaveTo="opacity-100"
            afterLeave={() => setQuery("")}
          >
            <Options>
              {filteredManufacturers.length === 0 && query !== "" ? (
                <Option active={true} value={query}>Create "{query}"</Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Option active={false} key={item} value={item}>
                    {({ selected, active }) => (
                      <>
                        <StyledSpan active={true}>
                            {item}
                        </StyledSpan>
                        {selected ? (
                         <AbsoluteSpan/>
                        ) : null}
                      </>
                    )}
                  </Option>
                ))
              )}
            </Options>
          </TransitionBox>
          </Content>
        </Combobox>
      </Container>
    );
  }

export default SearchManufacturer

const Container = styled.div`

  top: 4rem; 
  width: 60vw;
  max-width:600px;
  min-width:270px;

  @media screen and (max-width:600px){
    width:80vw;
  }
  @media screen and (max-width:350px){
    width:90vw;
  }
`

const BoxCombo = styled(Combobox.Input)`
  width: 100%;
  border: none;
  box-shadow: none;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 2.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #1a202c;
  outline: none;
  z-index: 3;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`

const TransitionBox = styled(Transition)``


const Option = styled(Combobox.Option)`
  z-index: 3;
  position: relative;
  cursor: default;
  user-select: none;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 2.5rem;
  padding-right: 1rem;
  ${({ active }) =>
    active
      ? css`
          background-color: var(--color1);
          color: #ffffff;
        `
      : css`
          color: #1a202c;
        `}

`


const Options = styled(Combobox.Options)`
  z-index: 3;
  position: absolute;
  margin-top: 0.25rem;
  max-height: 15rem;
  width: 100%;
  overflow: auto;
  border-radius: 0.375rem;
  background-color: #fff;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
  outline: none;

  &:focus {
    outline: none;
  }

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }

`

const Content = styled.div`
   position: relative;
   margin-top: 10px;
`

const Wrap = styled.div`
  position: relative;
  width: 100%;
  cursor: default;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: var(--color3);
  text-align: left;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  outline: none;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(156, 163, 175, 0.5);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.75);
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(156, 163, 175, 0.5), 0 0 0 1px #fff;
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(156, 163, 175, 0.5), 0 0 0 1px #fff, 0 0 0 2px #86d7b7;
  }

  font-size: 0.875rem;
`

const AbsoluteSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
  ${({ active }) =>
    active
      ? css`
          color: #ffffff;
        `
      : css`
          color: var(--color1);
        `}
`;

const StyledSpan = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ selected }) =>
    selected
      ? css`
          font-weight: 500;
        `
      : css`
          font-weight: normal;
        `}
`;