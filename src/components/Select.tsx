import { component$, useSignal, useStyles$ } from '@builder.io/qwik';
import { Select } from '@qwik-ui/headless';

export default component$(() => {
  const users = ['Tim', 'Ryan', 'Jim', 'Jessie', 'Abby'];
  const display = useSignal<string[]>(["Tim"]);

  return (
    <Select.Root bind:displayValue={display} multiple class="select">
      <Select.Trigger class="select-trigger">
        <Select.DisplayValue>{display.value.join(', ')}</Select.DisplayValue>
      </Select.Trigger>
      <Select.Popover class="select-popover">
        {users.map((user, index) => (
          <Select.Item value={index.toString()} class="select-item" key={user}>
            <Select.ItemLabel>{user}</Select.ItemLabel>
            <Select.ItemIndicator>
            </Select.ItemIndicator>
          </Select.Item>
        ))}
      </Select.Popover>
    </Select.Root>
  );
});

