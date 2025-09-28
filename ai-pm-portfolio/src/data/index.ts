
// This file imports all case study content and aggregates it into arrays.

import { pepsiContent } from './cases/pepsi';
import { retailBattleContent } from './cases/retailBattle';
import { walmartContent } from './cases/walmart';
import { haagenDazsContent } from './cases/haagenDazs';
import { meituanContent } from './cases/meituan';
import { ctripContent } from './cases/ctrip';
import { deepseekContent } from './cases/deepseek';
import { f1Content } from './cases/f1';
import { levisContent } from './cases/levis';
import { mgContent } from './cases/mg';
import { ykkContent } from './cases/ykk';
import { promptExampleContent } from './cases/promptExample';

export const caseStudies = [
  { title: '京东美团阿里为何上演即时零售「三国杀」？', imageUrl: 'https://www.svgrepo.com/show/157150/shopping-cart-outline.svg', content: retailBattleContent },
  { title: '携程Trip.com如何吸引海外用户？', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Trip.com_logo.svg', content: ctripContent },
  { title: '美团为何从社区团购「闪电撤退」？', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Meituan_logo.svg/1200px-Meituan_logo.svg.png', content: meituanContent },
  { title: '百事可乐为何在北美市场失宠？', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Pepsi_logo_2023.svg', content: pepsiContent },
  { title: '硅谷公司的AI人才抢夺战', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/DeepSeek_logo.svg', content: deepseekContent },
  { title: '沃尔玛电商为何能够威胁到亚马逊？', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg', content: walmartContent },
  { title: '「冰淇淋爱马仕」哈根达斯为何人气不再？', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Häagen-Dazs_Logo.svg', content: haagenDazsContent },
  { title: '电影大火背后，为何现实世界F1少有美国车手？', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg', content: f1Content },
  { title: '李维斯为何实现持续增长？', imageUrl: 'https://static.cdnlogo.com/logos/l/98/levis.svg', content: levisContent },
  { title: '名爵为何成为欧洲出海销冠？', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/MG_Motor_2021_logo.svg', content: mgContent },
  { title: 'YKK如何成为「拉链大王」？', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/YKK_Group_Logo.svg', content: ykkContent },
];

export const promptExamples = [
  {
    title: '播客转译为英文Newsletter',
    imageUrl: 'https://i.imgur.com/6QoA01j.png',
    content: promptExampleContent
  }
];
