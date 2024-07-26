var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { mount } from '@vue/test-utils';
import Counter from '../src/components/Counter.vue';
describe('Counter.vue', () => {
    it('should render', () => {
        const wrapper = mount(Counter, { props: { initial: 10 } });
        expect(wrapper.text()).toContain('10');
        expect(wrapper.html()).toMatchSnapshot();
    });
    it('should be interactive', () => __awaiter(void 0, void 0, void 0, function* () {
        const wrapper = mount(Counter, { props: { initial: 0 } });
        expect(wrapper.text()).toContain('0');
        expect(wrapper.find('.inc').exists()).toBe(true);
        yield wrapper.get('button').trigger('click');
        expect(wrapper.text()).toContain('1');
    }));
});
