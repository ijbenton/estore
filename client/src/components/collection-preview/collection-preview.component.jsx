import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  TitleContainer,
  Title,
  PreviewContainer
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <TitleContainer>
      <Title onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title.toUpperCase()}
      </Title>
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, index) => index < 4)
        .map((item, index) => (
          <CollectionItem
            key={item.id}
            item={item}
            routeName={routeName}
            history={history}
            title={title}
            match={match}
            index={index}
          />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
