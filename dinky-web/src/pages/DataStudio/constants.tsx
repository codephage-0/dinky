/*
 *
 *  Licensed to the Apache Software Foundation (ASF) under one or more
 *  contributor license agreements.  See the NOTICE file distributed with
 *  this work for additional information regarding copyright ownership.
 *  The ASF licenses this file to You under the Apache License, Version 2.0
 *  (the "License"); you may not use this file except in compliance with
 *  the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

import { l } from '@/utils/intl';
import { CloseCircleTwoTone, IssuesCloseOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import { MenuItemType } from 'rc-menu/lib/interface';

export const TAG_RIGHT_CONTEXT_MENU: MenuItemType[] = [
  {
    key: 'closeAll',
    label: (
      <Space>
        <CloseCircleTwoTone />
        {l('right.menu.closeAll')}
      </Space>
    )
  },
  {
    key: 'closeOther',
    label: (
      <Space>
        <IssuesCloseOutlined className={'blue-icon'} />
        {l('right.menu.closeOther')}
      </Space>
    )
  }
];

/**
 * 作业 方言类型
 * @type {({options: ({label: string, value: string} | {label: string, value: string} | {label: string, value: string} | {label: string, value: string})[], label: string} | {options: ({label: string, value: string} | {label: string, value: string} | {label: string, value: string} | {label: string, value: string} | {label: string, value: string} | {label: string, value: string} | {label: string, value: string} | {label: string, value: string} | {label: string, value: string} | {label: string, value: string} | {label: string, value: string})[], label: string} | {options: ({label: string, value: string} | {label: string, value: string} | {label: string, value: string})[], label: string})[]}
 */
export const JOB_TYPE: DefaultOptionType[] = [
  {
    label: 'Flink Job Type',
    options: [
      {
        value: 'FlinkSql',
        label: 'FlinkSql'
      },
      {
        value: 'FlinkJar',
        label: 'FlinkJar'
      },
      {
        value: 'FlinkSqlEnv',
        label: 'FlinkSqlEnv'
      }
    ]
  },
  {
    label: 'Jdbc Query Type',
    options: [
      {
        value: 'Mysql',
        label: 'Mysql'
      },
      {
        value: 'Oracle',
        label: 'Oracle'
      },
      {
        value: 'SqlServer',
        label: 'SqlServer'
      },
      {
        value: 'PostgreSql',
        label: 'PostgreSql'
      },
      {
        value: 'ClickHouse',
        label: 'ClickHouse'
      },
      {
        value: 'Doris',
        label: 'Doris'
      },
      {
        value: 'Hive',
        label: 'Hive'
      },
      {
        value: 'Phoenix',
        label: 'Phoenix'
      },
      {
        value: 'StarRocks',
        label: 'StarRocks'
      },
      {
        value: 'Presto',
        label: 'Presto'
      }
    ]
  },
  {
    label: 'Other Type',
    options: [
      {
        value: 'Java',
        label: 'Java'
      },
      {
        value: 'Scala',
        label: 'Scala'
      },
      {
        value: 'Python',
        label: 'Python'
      }
    ]
  }
];

export const SAVE_POINT_TYPE: DefaultOptionType[] = [
  {
    label: l('global.savepoint.strategy.disabled'),
    value: 0
  },
  {
    label: l('global.savepoint.strategy.latest'),
    value: 1
  },
  {
    label: l('global.savepoint.strategy.earliest'),
    value: 2
  },
  {
    label: l('global.savepoint.strategy.custom'),
    value: 3
  }
];
