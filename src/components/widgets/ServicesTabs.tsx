import { component$ } from '@builder.io/qwik';
import { Tabs } from '../ui/Tabs';
import { Card } from '../ui/Card';
import { Label } from '../ui/Label';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import Custom from './Custom';

export default component$(() => {
  return (
    <Tabs.Root class="">
      <Tabs.List class="grid w-full grid-cols-3">
        <Tabs.Tab>Design</Tabs.Tab>
        <Tabs.Tab>Development</Tabs.Tab>
        <Tabs.Tab>Marketing</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel>
        <Card.Root class="!bg-primary/5 pt-2">
   
          <Card.Content class="space-y-2 !bg-white/10 p-5">
          <Custom/>
          </Card.Content>
          <Card.Footer>
            <Button class="w-full opacity-90">Save changes</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Panel>
           <Tabs.Panel>
        <Card.Root>
          <Card.Header>
            <Card.Title>Account</Card.Title>
            <Card.Description>
              Make changes to your account here. Click save when you're done.
            </Card.Description>
          </Card.Header>
          <Card.Content class="space-y-2">
            <div class="space-y-1">
              <Label for="name">Name</Label>
              <Input id="name" value="Pedro Duarte" />
            </div>
            <div class="space-y-1">
              <Label for="username">Username</Label>
              <Input id="username" value="~peduarte" />
            </div>
          </Card.Content>
         
        </Card.Root>
      </Tabs.Panel>
      <Tabs.Panel>
        <Card.Root>
          <Card.Header>
            <Card.Title>Password</Card.Title>
            <Card.Description>
              Change your password here. After saving, you'll be logged out.
            </Card.Description>
          </Card.Header>
          <Card.Content class="space-y-2">
            <div class="space-y-1">
              <Label for="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div class="space-y-1">
              <Label for="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button>Save password</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Panel>
    </Tabs.Root>
  );
});
