import { defineComponent, watchEffect } from 'vue';
import { useRequest } from 'vue-request';

function testService() {
  return new Promise<string>(resolve => {
    setTimeout(() => {
      resolve(new Date().toLocaleString());
    }, 1000);
  });
}

export default defineComponent({
  name: 'App',
  setup() {
    const { data, loading, refresh } = useRequest(testService);

    watchEffect(() => {
      console.log('data', data.value);
    });
    return () => (
      <div>
        <button onClick={() => refresh()}>refresh</button>
        <br />
        {loading.value ? 'loading...' : JSON.stringify(data.value)}
      </div>
    );
  },
});
