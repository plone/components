import { Fragment } from 'react';
// import { defineMessages, useIntl } from 'react-intl';

import { map } from 'lodash';
import { hasBlocksData } from '../../helpers/blocks';
import DefaultBlockView from './DefaultBlockView';
import type { GetContentResponse } from '@plone/types/content/get';
import type { BlocksConfig } from '@plone/types/config/Blocks';
import type { Location } from 'history';

type RenderBlocksProps = {
  content: GetContentResponse;
  blocksConfig: BlocksConfig;
  as: React.ElementType;
  location: Location;
  metadata?: GetContentResponse;
};

const RenderBlocks = (props: RenderBlocksProps) => {
  const { blocksConfig, content, location, metadata } = props;
  const CustomTag = props.as || Fragment;

  return hasBlocksData(content) ? (
    <CustomTag>
      {map(content.blocks_layout.items, (block) => {
        const blockData = content.blocks?.[block];
        const blockType = blockData?.['@type'];
        const Block = blocksConfig[blockType]?.view || DefaultBlockView;

        return Block ? (
          <Block
            id={block}
            metadata={metadata}
            properties={content}
            data={blockData}
            path={location?.pathname || ''}
            blocksConfig={blocksConfig}
          />
        ) : blockData ? (
          <div key={block}>Unknown block found: {blockType}</div>
        ) : (
          <div key={block}>Invalid Block</div>
        );
      })}
    </CustomTag>
  ) : (
    ''
  );
};

export default RenderBlocks;
