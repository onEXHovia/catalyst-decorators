import { target, targets, controller, findTarget, findTargets } from '@github/catalyst'

@controller
class TestTargetElement extends HTMLElement {
  @target item;
  @targets items;

  debugItems() {
    console.log(this.item);
    console.log(this.items);

    console.log(findTarget(this, 'item'));
    console.log(findTargets(this, 'items'));
  }
}
