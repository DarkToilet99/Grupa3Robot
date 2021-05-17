using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Mobile
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Page2 : ContentPage
    {
        public Page2()
        {
            InitializeComponent();
        }
         

        private async void Button_Initiere_transport(object sender, EventArgs e)
        {
            await Navigation.PushAsync(new Initiere_transport());
        }

        private async void Button_Selectare_mod_control(object sender, EventArgs e)
        {
            await Navigation.PushAsync(new Selectaremodcontrol());
        }

        private async void Button_Control_manual(object sender, EventArgs e)
        {
            await Navigation.PushAsync(new Controlmanual());

        }

        private async void Button_Rapoarte(object sender, EventArgs e)
        {
            await Navigation.PushAsync(new Rapoarte());
        }

        private async void Button_Deconectare(object sender, EventArgs e)
        {
            bool answer = await DisplayAlert("", "Sunteti sigur ca va deconectati?", "Da", "Nu");
            if (answer == true)
            {
                await Navigation.PushAsync(new MainPage());
                await DisplayAlert("", "Ati fost deconectat cu succes!", "OK");
            }



        }
    }
}