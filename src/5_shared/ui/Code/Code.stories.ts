import type { Meta, StoryObj } from '@storybook/react'
import { SBDecorator } from '5_shared/lib/storybookDecorators/SBDecorator'
import { Theme } from '0_app/providers/ThemeProvider'
import { Code } from './Code'

const meta: Meta<typeof Code> = {
  title: 'Shared/Code',
  component: Code,
}

export default meta
type Story = StoryObj<typeof Code>

export const CodeLight: Story = {
  args: {
    textCode: "import { FC, memo, ReactNode } from 'react'\n"
            + "import { classNames } from '5_shared/lib/classNames/classNames'\n"
            + "import { useTranslation } from 'react-i18next'\n"
            + "import cls from './Code.module.scss'\n"
            + '\n'
            + 'interface CodeProps {\n'
            + '    className?: string\n'
            + '    children: ReactNode\n'
            + '}\n'
            + '\n'
            + 'export const Code: FC<CodeProps> = memo((props: CodeProps) => {\n'
            + '  const { className, children } = props\n'
            + '  const { t } = useTranslation()\n'
            + '\n'
            + '  return (\n'
            + '    <code\n'
            + '      className={classNames(cls.code, {}, [className])}\n'
            + '    >\n'
            + '      {children}\n'
            + '    </code>\n'
            + '  )\n'
            + '})\n'
            + '\n'
            + "Code.displayName = 'Code'\n",
  },
  decorators: [SBDecorator(Theme.LIGHT)],
}

export const CodeDark: Story = {
  args: {
    textCode: "import { FC, memo, ReactNode } from 'react'\n"
            + "import { classNames } from '5_shared/lib/classNames/classNames'\n"
            + "import { useTranslation } from 'react-i18next'\n"
            + "import cls from './Code.module.scss'\n"
            + '\n'
            + 'interface CodeProps {\n'
            + '    className?: string\n'
            + '    children: ReactNode\n'
            + '}\n'
            + '\n'
            + 'export const Code: FC<CodeProps> = memo((props: CodeProps) => {\n'
            + '  const { className, children } = props\n'
            + '  const { t } = useTranslation()\n'
            + '\n'
            + '  return (\n'
            + '    <code\n'
            + '      className={classNames(cls.code, {}, [className])}\n'
            + '    >\n'
            + '      {children}\n'
            + '    </code>\n'
            + '  )\n'
            + '})\n'
            + '\n'
            + "Code.displayName = 'Code'\n",
  },
  decorators: [SBDecorator(Theme.DARK)],
}
