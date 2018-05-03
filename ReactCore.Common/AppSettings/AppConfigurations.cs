using Microsoft.Extensions.Options;

namespace ReactCore.Common.AppSettings
{
    public class AppConfigurations : IAppConfigurations
    {
        private AppSettingsConfig AppSettings { get; }

        public AppConfigurations(IOptions<AppSettingsConfig> options)
        {
            AppSettings = options.Value;
        }

        public ConnectionStringsConfig ConnectionStrings => AppSettings.ConnectionStrings;
        public JWTConfig Jwt => AppSettings.Jwt;
    }
}
