import { component$ } from '@builder.io/qwik';
import { Tabs } from '../ui/Tabs';
import { Card } from '../ui/Card';
import { Label } from '../ui/Label';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import Custom from './Custom';
import { LuBook, LuCode, LuPaintbrush } from '@qwikest/icons/lucide';

// Create Qwik-compatible icon components
const PaintbrushIcon = component$(() => {
  return <LuPaintbrush class="w-5 h-5 mb-1" />;
});

const CodeIcon = component$(() => {
  return <LuCode class="w-5 h-5 mb-1" />;
});

const BookIcon = component$(() => {
  return <LuBook class="w-5 h-5 mb-1" />;
});

export default component$(() => {
  return (
    <Tabs.Root class="">
      <Tabs.List class="grid w-full grid-cols-4 text-xs">
        <Tabs.Tab>
          <div class="flex flex-col items-center">
            <PaintbrushIcon />
            Design
          </div>
        </Tabs.Tab>
        <Tabs.Tab>
          <div class="flex flex-col items-center">
            <CodeIcon />
            Develop
          </div>
        </Tabs.Tab>
        <Tabs.Tab>
          <div class="flex flex-col items-center">
            <BookIcon />
            Branding
          </div>
        </Tabs.Tab>
            <Tabs.Tab>
          <div class="flex flex-col items-center">
            <CodeIcon />
            Marketing
          </div>
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel class="">
        <Card.Root class="rounded-t-none border-none">
          <Card.Content class="space-y-2 p-5 ">

            <Custom />

          </Card.Content>
          <Card.Footer>
            <Button class="w-full opacity-90">Save changes</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Panel>
       <Tabs.Panel>
        <Card.Root class="!bg-primary/5 border-none rounded-t-none">
          <Card.Content class="space-y-2  p-5">
            <Custom />
          </Card.Content>
          <Card.Footer>
            <Button class="w-full opacity-90">Save changes</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Panel>
      <Tabs.Panel>
        <Card.Root class="border-none rounded-t-none">
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
        <Card.Root class="rounded-t-none border-none">
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