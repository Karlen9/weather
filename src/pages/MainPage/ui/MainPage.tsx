import { Button, ThemeButton } from "shared/ui/Button/Button";
import cls from './MainPage.module.scss';
import { classNames } from "shared/lib/classNames/classNames";


const MainPage = () => {
  return (
    <div className={classNames(cls.buttons, {}, [])}>

      <Button theme={ThemeButton.SUBMIT}>
        Submit
      </Button>
      {'     '}

      <Button theme={ThemeButton.CANCEL}>
        Cancel
      </Button>
          {'     '}
      <Button theme={ThemeButton.DISABLED}>
        Disabled
      </Button>
      {'     '}

      <Button theme={ThemeButton.OUTLINED}>
        Outlined
      </Button>
      {'     '}

      <Button theme={ThemeButton.LOADING}>
        Outlined
      </Button>
    </div>
  );
};

export default MainPage;